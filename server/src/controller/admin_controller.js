import UserService from '../service/user_service.js';
import logger from '../logger/index.js';

const adminController = {
  getAdminList: async (req, res) => {
    try {
      const admins = await UserService.getAllAdmins();
      if (admins != null) return res.status(200).json(admins);
    } catch (error) {
      return res.status(500).json({ message: 'Server Error' });
    }
  },

  postAddAdmin: async (req, res) => {
    try {
      const email = req.body.email;
      logger.info(req.body.email);
      logger.info(req.body);
      const flag = await UserService.updateAdministratorUser(email, true);
      logger.info(JSON.stringify(flag));
      if (flag) {
        return res.status(200).json(flag);
      }
    } catch (error) {
      logger.info(error);
      return res.status(500).json({ message: 'Server Error' });
    }
  },
  postRemoveAdmin: async (req, res) => {
    try {
      const email = req.body.email;
      const flag = await UserService.updateAdministratorUser(email, false);
      if (flag)
        return res
          .status(200)
          .json({ message: 'Admin removed successfully! ' });
    } catch (error) {
      return res.status(500).json({ message: 'Server Error' });
    }
  },

  /* edit professor info here
  editProfessor: async (req, res) => {
    try {
      const id = req.body.id;
      const editProf = {
        firstName: req.body.fName,
        lastName: req.body.lName,
        email: req.body.email,
        college: req.body.college,
        department: req.body.dep,
        status: req.body.status,
        courses: req.body.courses,
      }

      const edit = await UserService.updateProfDetails(editProf);
      if (edit) {
        return res.status(200).json({ message: 'Instructor edit successful' });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Server Error' });
    }
  }


  */
};

export default adminController;
