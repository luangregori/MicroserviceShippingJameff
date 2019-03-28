import { createConnection } from 'typeorm'

export default (app:any) => {

    createConnection().then(async () => {
        
        
        //new LojasRouter(app)

        //caso não encontre nenhuma rota
        app.use((req, res) => {
            res.status(404).json({errorCode: 404, msg: 'Pagina não encontrada!'});
        });
})
}