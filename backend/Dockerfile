FROM python:3.11-slim

# System dependencies:
# - ffmpeg: required by yt-dlp for audio extraction (YouTube + audio/video uploads)
# - tesseract-ocr: required by pytesseract for image text extraction
RUN apt-get update && apt-get install -y --no-install-recommends \
    ffmpeg \
    tesseract-ocr \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Render injects $PORT at runtime; default to 8000 for local use
CMD ["sh", "-c", "uvicorn main:app --host 0.0.0.0 --port ${PORT:-8000}"]