const axiosPayload = () => {
  return {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")} `,
    },
  };
};

export default axiosPayload;