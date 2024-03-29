import Joi from "joi";

const PostValidator = {
  create: (req, res, next) => {
    const schema = Joi.object({
      title: Joi.string().min(3).max(20).required(),

      description: Joi.string().max(200),
      userId: Joi.number(),
    });

    const response = schema.validate(req.body);
    if (response.error) {
      return res
        .status(400)
        .json({ message: "Invalid data", error: response.error });
    }

    console.log(response);
    next();
  },
};

export default PostValidator;