# Use the official Python image
FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Copy the requirements file and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the Celery application code
COPY . .

# Command to run the Celery worker
CMD ["celery", "-A", "celery_config.app", "worker", "--loglevel=info"]