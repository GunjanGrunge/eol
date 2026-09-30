import fitz
from pathlib import Path
source = Path('attached_assets/eolarity_brand_sheet_1790747368304.pdf')
out = Path('.agents/outputs')
doc = fitz.open(source)
for i, page in enumerate(doc):
    pix = page.get_pixmap(matrix=fitz.Matrix(1.25, 1.25), alpha=False)
    pix.save(out / f'eolarity-brand-{i+1}.png')
print(f'Rendered {len(doc)} pages')
