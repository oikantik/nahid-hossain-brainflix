const momentAgo = (date) => {
  const getDate = new Date(date);
  const rightNow = new Date();
  const seconds = Math.floor((rightNow.getTime() - getDate.getTime()) / 1000); // getting it in seconds

  if (seconds < 60) return `${seconds} seconds ago`;

  if (seconds >= 60 && seconds < 60 * 60) {
    return `${Math.floor(seconds / 60)} minutes ago`;
  }

  if (seconds >= 60 * 60 && seconds < 60 * 60 * 24) {
    return `${Math.floor(seconds / (60 * 60))} hours ago`;
  }

  if (seconds >= 60 * 60 * 24 && seconds < 60 * 60 * 24 * 30) {
    return `${Math.floor(seconds / (60 * 60 * 24))} days ago`;
  }

  if (seconds >= 60 * 60 * 24 * 30 && seconds < 60 * 60 * 24 * 30 * 12) {
    return `${Math.floor(seconds / (60 * 60 * 24 * 30))} months ago`;
  }

  if (seconds >= 60 * 60 * 24 * 30) {
    return `${Math.floor(seconds / (60 * 60 * 24 * 30 * 12))} years ago`;
  }
};

export default momentAgo;
