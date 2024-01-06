const roleMiddleware = (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Admin only.' });
    }

    next();
  } catch (error) {
    console.error('Role middleware error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = roleMiddleware;// Updated on 2024-01-09 06:24:00
// Updated on 2024-01-06 14:58:00
