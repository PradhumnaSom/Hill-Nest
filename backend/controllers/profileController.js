const getProfile = async (req, res) => {
  const user = req.user;

  return res.status(200).json({
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      emailVerified: user.emailVerified,
    },
  });
};

module.exports = {
  getProfile,
};
