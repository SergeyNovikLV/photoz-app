const modals = () => {
  function bindModal(triger, modal, close) {
    triger.addEventListener('click', (e) => {
      if (e.target) {
        e.preventDefault()
      }
      modal.style.display = 'block'
      document.body.style.overflow = 'hidden'
    })

    close.addEventListener('click', () => {
      modal.style.display = 'none'
      document.body.style.overflow = ''
    })
  }

  const createNewPost = document.querySelector(), 
}

export default modals
