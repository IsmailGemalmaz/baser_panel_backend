import {Router} from 'express';
import {AboutController} from '../controller/AboutController'
const router=Router();
const aboutController=new AboutController;

router.get('/get',aboutController.getAbout);
router.post('/create',aboutController.createAbout)
router.put('/update/:id',aboutController.updateAbout);
router.delete('/delete/:id',aboutController.deleteAbout);



export default router;