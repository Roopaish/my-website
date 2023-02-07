export default function openURL(url: string) {
  if (window) {
    window.open(url, '_blank');
  }
}
