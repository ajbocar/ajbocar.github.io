import { Button } from './button'

export function PDFDownload() {
  const handleDownload = async () => {
    // Dynamically import html2pdf to avoid SSR issues
    const html2pdf = (await import('html2pdf.js')).default;
    
    // Store current theme
    const isDark = document.documentElement.classList.contains('dark');
    
    // Force light theme for PDF
    if (isDark) {
      document.documentElement.classList.remove('dark');
    }
    
    // Get the header and content
    const header = document.querySelector('header h1');
    const content = document.querySelector('.prose');
    
    // Create a wrapper div for the PDF content
    const wrapper = document.createElement('div');
    wrapper.style.padding = '20px';
    wrapper.style.color = 'black';
    wrapper.style.background = 'white';
    
    // Clone the header and content
    if (header) {
      const headerClone = header.cloneNode(true) as HTMLElement;
      headerClone.style.marginBottom = '2rem';
      headerClone.style.color = 'black';
      wrapper.appendChild(headerClone);
    }
    
    if (content) {
      const contentClone = content.cloneNode(true) as HTMLElement;
      wrapper.appendChild(contentClone);
    }
    
    const opt = {
      margin: 1,
      filename: 'anwar-julian-bocar-resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    }
    
    try {
      await html2pdf().set(opt).from(wrapper).save();
    } finally {
      // Restore original theme
      if (isDark) {
        document.documentElement.classList.add('dark');
      }
    }
  }

  return (
    <Button 
      onClick={handleDownload}
      variant="ghost"
      size="icon"
      title="Download PDF"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
        />
      </svg>
      <span className="sr-only">Download PDF</span>
    </Button>
  )
}
