export default async function handler(req, res) {
  const delay = (Math.random() * 4) + 1 * 1000;

  await new Promise(function (resolve) {
    setTimeout(resolve, delay);
  })

  res.status(200).json({ user: req.headers.authorization || "nenhum" })
}
