# 🍃 Ishayna Tea Website

Premium tea business website built from spreadsheet data.

## 🌐 Live Website
- **Production**: https://pmkhairnarr.github.io/ishayna-tea-website
- **Development**: Branch-specific deployments

## 📊 Data Sources

### Primary Data File
- `data/tea-business.xlsx` - Main business data with sheets:
  - **Products** - Tea varieties, prices, descriptions
  - **Services** - Consulting, custom blends, events  
  - **About** - Company history, mission, team
  - **Contact** - Store locations, contact info
  - **Gallery** - Product showcase

### Alternative: Google Sheets
- `data/google-sheets-links.txt` - Google Sheets URLs
- Automatically synced when updated

## 🖼️ Images
- `images/products/` - Tea product photos
- `images/store/` - Store and location photos
- `images/team/` - Team member photos
- `images/branding/` - Logos and brand assets

## 🚀 Auto-Deployment
Website automatically rebuilds when:
- Excel file is updated in `/data` folder
- Google Sheets links are modified
- Images are added/updated
- Configuration changes are made

## 🔧 Configuration
- `config/website-config.json` - Website settings
- `config/deployment-config.json` - GitHub Pages settings
- `.github/workflows/build-deploy.yml` - Auto-build pipeline

## 🎨 Customization
- **Theme**: Business/Tea (green palette)
- **Colors**: Primary #2D5016, Secondary #8FBC8F, Accent #DAA520
- **Features**: Product catalog, contact forms, image gallery

---
*Built with spreadsheet-website-builder-mcp*