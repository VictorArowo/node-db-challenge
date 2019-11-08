import { getAll, postOne } from './resources.model';

export const getAllResources = async (req, res) => {
  try {
    let resources = await getAll();
    return res.status(200).json(resources);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Something went wrong: ' + error.message });
  }
};

export const createResource = async (req, res) => {
  const { name, description } = req.body;

  try {
    let resource = await postOne({
      name,
      description
    });
    return res.status(201).json(resource);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Something went wrong: ' + error.message });
  }
};
