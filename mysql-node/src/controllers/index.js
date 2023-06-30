exports.create = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query('INSERT INTO cliente SET ? ', [req.body], (err, result) => {            
            if (err) return res.send(err);
            res.send('cliente adicionado!');
        }   )   ;
    });
};

exports.select = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query('SELECT * FROM cliente', (err, rows) => {            
            if (err) return res.send(err);
            res.json(rows);
        }   )   ;
    });
};

exports.borrar =  (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
           console.log(req.body);
        conn.query('DELETE FROM cliente WHERE ID = ?', [req.params.id], (err, rows) => {        //conn.query('INSERT INTO books set ?',[req.bady], (err, rows) => {
            if (err) return res.send(err)
            res.send('Cliente eliminado..');
        });
    });

};

