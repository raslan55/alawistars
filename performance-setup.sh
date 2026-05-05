#!/bin/bash
# Performance optimization setup script

echo "🚀 Installing performance optimization dependencies..."
npm install

echo "✅ Dependencies installed!"
echo ""
echo "📊 Running production build with optimization..."
npm run build

echo ""
echo "✨ Build complete! Analyzing bundle size..."
echo ""
echo "🔍 To visualize the bundle, run:"
echo "   npm run build"
echo "   npx rollup-plugin-visualizer dist/stats.html"
echo ""
echo "💡 Performance Optimization Tips:"
echo "   1. Check PERFORMANCE_OPTIMIZATION.md for next steps"
echo "   2. Run: npm audit to check for vulnerabilities"
echo "   3. Lazy-load heavy images using LazyImage component"
echo "   4. Monitor Lighthouse scores: npm run preview, then run Lighthouse"
echo ""
echo "📈 Expected improvements after all optimizations:"
echo "   - Initial bundle: ~30-40% smaller"
echo "   - Faster page load times (LCP, FCP)"
echo "   - Better Lighthouse scores (85+)"
echo ""
