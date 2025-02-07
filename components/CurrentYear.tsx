const CurrentYear = () => {
  const currentYear = new Date().getFullYear();
  return <p>{currentYear} © Edition</p>;
};
export default CurrentYear;
