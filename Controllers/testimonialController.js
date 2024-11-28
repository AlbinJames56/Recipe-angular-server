const testimonials = require("../Model/testimonials");

// addTestimonials
exports.addTestimonialController = async (req, res) => {
  console.log("inside testimonials");
  const { name, email, message } = req.body;
  try {
    const newMessage = new testimonials({
      name,
      email,
      message,
    });
    await newMessage.save();
    res.status(200).json(newMessage);
  } catch (err) {
    res.status(401).json(err);
  }
};
