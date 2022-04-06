export default function notFound(req, res) {
    res.status(404);
    res.send({
        error: "not found",
    });
}
