function ensureAdmin(req, res, next) {
    const { isAdmin } = req.user; 
  
    if (!isAdmin) {
      return res.status(403).json({ error: "Acesso não autorizado, apenas para administradores" });
    }
  
    next();
  }
  
  module.exports = ensureAdmin;
  