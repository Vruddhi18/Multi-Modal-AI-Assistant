import PyPDF2
from pptx import Presentation
import io

def parse_document(file_bytes: bytes, ext: str) -> str:
    text = ""
    try:
        if ext == 'pdf':
            pdf_file = io.BytesIO(file_bytes)
            reader = PyPDF2.PdfReader(pdf_file)
            for page in reader.pages:
                extracted = page.extract_text()
                if extracted:
                    text += extracted + "\n"
        elif ext == 'pptx':
            pptx_file = io.BytesIO(file_bytes)
            prs = Presentation(pptx_file)
            for slide in prs.slides:
                for shape in slide.shapes:
                    if hasattr(shape, "text"):
                        text += shape.text + "\n"
        elif ext == 'txt':
            text = file_bytes.decode('utf-8')
    except Exception as e:
        print(f"Error parsing document: {e}")
        raise e
        
    return text
