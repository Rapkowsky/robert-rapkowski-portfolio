const CurrentYear = () => {
  const currentYear = new Date().getFullYear();
  return <p className="text-white">{currentYear} © Edition</p>;
};
export default CurrentYear;
