// Show and hide modal
document.getElementById( 'show-modal' ).addEventListener( "click", () => {
    const modal = document.getElementById('modal-example');
    modal.classList.add( "active" );
});

document.getElementById( 'close-modal-example' ).addEventListener( "click", () => {
    const modal = document.getElementById('modal-example');
    modal.classList.remove( "active" );
});