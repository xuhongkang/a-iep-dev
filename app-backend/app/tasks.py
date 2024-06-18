from .celery_config import celery_app
import base64
import requests
from PyPDF2 import PdfFileReader
from PIL import Image
import io

@celery_app.task
def process_files(files: list, file_type: str):
    results = []
    for file in files:
        if file_type == 'pdf':
            results.extend(process_pdf(file))
        elif file_type in ['png', 'jpg', 'jpeg']:
            results.append(process_image(file))
    return results

def process_pdf(file: str):
    pdf_results = []
    pdf_reader = PdfFileReader(io.BytesIO(base64.b64decode(file)))
    for page_num in range(pdf_reader.numPages):
        page = pdf_reader.getPage(page_num)
        writer = PdfFileWriter()
        writer.addPage(page)
        output_stream = io.BytesIO()
        writer.write(output_stream)
        base64_page = base64.b64encode(output_stream.getvalue()).decode('utf-8')
        response = call_external_api(base64_page)
        pdf_results.append(response)
    return pdf_results

def process_image(file: str):
    image = Image.open(io.BytesIO(base64.b64decode(file)))
    buffer = io.BytesIO()
    image.save(buffer, format="PNG")
    base64_image = base64.b64encode(buffer.getvalue()).decode('utf-8')
    return call_external_api(base64_image)

def call_external_api(base64_data: str):
    url = "https://external.api/endpoint"
    response = requests.post(url, json={"data": base64_data})
    return response.json()
