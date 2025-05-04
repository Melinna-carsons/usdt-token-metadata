function copyAddress() {
  const contractCode = document.getElementById("contractAddress").textContent;
  navigator.clipboard.writeText(contractCode)
    .then(() => alert("Contract address copied to clipboard!"))
    .catch(err => alert("Failed to copy address."));
}
