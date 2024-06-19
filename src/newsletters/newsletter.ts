import { Application, Request, Response } from 'express';
import { LoopsClient } from "loops";

const newsletter = (app: Application, loops: LoopsClient) => {

    app.post('/newsletter/subscribe', async (req: Request, res: Response) => {
        const email = req.body.email;
        const resp = await loops.createContact(email);
        res.status(200).send(resp);
    });
};

export default newsletter;
