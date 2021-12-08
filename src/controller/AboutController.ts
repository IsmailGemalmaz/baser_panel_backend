import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { About } from '../entity/About'
import { References } from '../entity/References';
import { Certificates } from '../entity/ Certificates';


export class AboutController {
    //HAKKIMIZDA LİSTELENİR
    async getAbout(req: Request, res: Response): Promise<Response> {
        const about = await getRepository(About).find();
        return res.json(about);
    };

    //  //HAKKIMIZDA oluşturulur
    async createAbout(req: Request, res: Response): Promise<Response> {
        let results;
        try {
            const newAbout: any = getRepository(About).create(req.body);
            results = await getRepository(About).save(newAbout);
            const newRef: any = getRepository(References).create(req.body);
            results = await getRepository(References).save(newRef);
            const newCer: any = getRepository(Certificates).create(req.body);
            results = await getRepository(Certificates).save(newCer);
        } catch (err) {
            console.log(err + "hata");
        }
        return res.json(results);
    }



    //   //hakkımızda güncellenir
    async updateAbout(req: Request, res: Response): Promise<Response> {
        const about = await getRepository(About).findOne(req.params.id);
        if (about) {
            getRepository(About).merge(about, req.body);
            const results = await getRepository(About).save(about);
            return res.json(results);
        }
        return res.status(404).json({ msg: 'Böyle bir kullanıcı bulunamadı' })
    }

    // //hakkımızda silinir
    async deleteAbout(req: Request, res: Response): Promise<Response> {
        const result = await getRepository(About).delete(req.params.id);
        return res.json(result);
    }
}