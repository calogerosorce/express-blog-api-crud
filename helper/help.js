
const tag = (req, res) => { return req.query.tag.charAt(0).toUpperCase() + req.query.tag.slice(1) };

module.exports = {
    tag
}