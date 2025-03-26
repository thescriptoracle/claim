
document.addEventListener('DOMContentLoaded', () => {
  // Set active wallet
  let activeWalletId = 'metamask';
  
  // Create SVG for arrow icon
  const createArrowIcon = () => {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="arrow-icon"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;
  };
  
  // Update wallet options to show active state
  const updateWalletOptions = () => {
    // Remove all existing arrows first
    document.querySelectorAll('.arrow-icon').forEach(arrow => {
      if (arrow.parentElement.tagName !== 'A') {
        arrow.remove();
      }
    });
    
    // Remove active class from all options
    document.querySelectorAll('.wallet-option').forEach(option => {
      option.classList.remove('active');
    });
    
    // Add active class and arrow to selected wallet
    const selectedOption = document.querySelector(`.wallet-option[data-id="${activeWalletId}"]`);
    if (selectedOption) {
      selectedOption.classList.add('active');
      
      // Only add arrow if it doesn't exist
      const existingArrow = selectedOption.querySelector('.arrow-icon');
      if (!existingArrow) {
        const walletLink = selectedOption.querySelector('.wallet-link');
        const arrowHTML = createArrowIcon();
        walletLink.insertAdjacentHTML('beforeend', arrowHTML);
      }
    }
  };
  
  // Handle wallet selection
  const handleWalletSelect = (walletId) => {
    activeWalletId = walletId;
    console.log(`Selected wallet: ${walletId}`);
    updateWalletOptions();
  };
  
  // Add event listeners to wallet options
  document.querySelectorAll('.wallet-option').forEach(option => {
    option.addEventListener('click', (event) => {
      // Allow default behavior to navigate to the HTML page
      // But first handle the wallet selection
      const walletId = option.dataset.id;
      handleWalletSelect(walletId);
    });
  });
  
  // Initialize the active wallet display
  updateWalletOptions();
  
  // Handle load more button click
  const loadMoreBtn = document.querySelector('.load-more-btn');
  loadMoreBtn.addEventListener('click', () => {
    console.log('Load more wallets clicked');
  });
});
