const handleName = (db, io, handleError) => name => {
    const doc = {
        date: new Date().getTime(),
        name
    };
    db.insert(doc, err => {
        if (err) {
            handleError(err);
        } else {
            db.find({}, (err1, docs) => {
                if (err1) {
                    handleError(err1);
                } else {
                    io.emit('names', docs);
                }
            });
        }
    });
};

module.exports = handleName;