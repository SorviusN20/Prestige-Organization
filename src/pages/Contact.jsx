import { useState } from 'react'

function Contact() {
  const whatsappNumber = '13476147725'
  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  return (
    <section className="contact-page">
      <div className="contact-grid">
        <div className="contact-form-column">
          <h1>Feel free to reach out for any questions</h1>
          <div className="contact-info">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2px' }}>
              <span style={{ fontStyle: 'italic' }}>Click here to Connect!</span>
              {/* Two arrows + links side by side */}
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '32px' }}>

                {/* WhatsApp column — arrow leans slightly left */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="54" viewBox="0 0 36 54" fill="none" aria-hidden="true">
                    <path d="M18 3 C14 15, 12 30, 14 48" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                    <path d="M14 48 L7 40 M14 48 L21 41" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                  </svg>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-link" style={{ display: 'flex', alignItems: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="#25D366" aria-label="WhatsApp" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '6px', flexShrink: 0 }}>
                      <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.476 2.027 7.785L0 32l8.417-2.007A15.934 15.934 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.74-1.833l-.483-.287-4.998 1.192 1.23-4.862-.317-.5A13.237 13.237 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.873c-.398-.199-2.355-1.162-2.72-1.294-.365-.133-.631-.199-.897.199-.266.398-1.03 1.294-1.263 1.56-.232.266-.465.299-.863.1-.398-.2-1.681-.62-3.202-1.977-1.183-1.057-1.982-2.362-2.214-2.76-.232-.398-.025-.613.175-.811.18-.178.398-.465.597-.698.2-.232.266-.398.398-.664.133-.266.067-.498-.033-.697-.1-.2-.897-2.162-1.23-2.96-.323-.777-.651-.672-.897-.684l-.764-.013c-.266 0-.697.1-1.063.498-.365.398-1.395 1.362-1.395 3.322s1.428 3.854 1.628 4.12c.199.266 2.81 4.29 6.808 6.018.951.41 1.693.655 2.271.839.954.304 1.822.261 2.508.158.765-.114 2.355-.963 2.688-1.893.333-.93.333-1.728.232-1.893-.1-.166-.365-.266-.763-.465z"/>
                    </svg>
                    <span style={{ verticalAlign: 'middle' }}>(347) 614-7725</span>
                  </a>
                </div>

                {/* Email column — arrow leans slightly right */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="54" viewBox="0 0 36 54" fill="none" aria-hidden="true">
                    <path d="M18 3 C22 15, 24 30, 22 48" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                    <path d="M22 48 L15 41 M22 48 L29 40" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                  </svg>
                  <a href="mailto:info@prestigeorganizing.com" style={{ display: 'flex', alignItems: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-label="Email" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '6px', flexShrink: 0 }}>
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M2 7 L12 13 L22 7" />
                    </svg>
                    <span style={{ verticalAlign: 'middle' }}>info@prestigeorganizing.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-image-column">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
            alt=""
            className="contact-image"
          />
        </div>
      </div>
    </section>
  )
}

export default Contact