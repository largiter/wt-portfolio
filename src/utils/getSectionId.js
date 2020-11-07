export default (section) => {
  const regex = /.+?(?=\$\$)/g;
  const destinationId = section.match(regex)[0];

  if (!destinationId) return false;

  return destinationId;
};
