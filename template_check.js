function supportsTemplate() {
  return 'content' in document.createElement('template');
}
if (supportsTemplate()) {
} else {
  $('template').hide();
}
