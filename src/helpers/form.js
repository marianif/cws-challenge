export const isValidAddress = (validAddresses, address) => {
  const isValid = validAddresses.some(
    (item) => item.toLowerCase() === address.toLowerCase().trim()
  );

  return isValid;
};
