export const onboarding = async (req, res) => {
  const userId = req.body.userId || "demo";
  const data = req.body;

  await saveUserProfile(userId, data);

  res.status(201).json({
    success: true,
    message: "User onboarded successfully"
  });
};

