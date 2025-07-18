# 🎯 Webex React Meeting Widget Starter

The purpose of this project is to build off of the [Webex React OAuth Sample App](https://github.com/WebexSamples/webex-react-oauth-sample) and integrate the [Webex Meetings Widget](https://github.com/webex/widgets/tree/master/src/widgets/WebexMeetings). The setup is a basic site that utilizes the implicit grant flow available for [Webex Integrations](https://developer.webex.com/docs/integrations). 

After authorizing the application, a meeting destination is entered and the Meeting Widget opens to that destination. Webex meeting destinations can be an email address, user ID, room ID or SIP address.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## ✨ Features

- **🔐 OAuth Integration** - Implicit grant flow authentication with Webex
- **🎥 Meeting Widget** - Complete embedded Webex meeting experience
- **📧 Multiple Destinations** - Support for email, user ID, room ID, and SIP address
- **⚡ Quick Setup** - Environment variable configuration for easy deployment
- **📱 Responsive Design** - Works on desktop and mobile devices
- **🚀 Live Demo** - Hosted GitHub Pages deployment for immediate testing

## 🌐 Live Demo

View the live demo here: **https://webexsamples.github.io/webex-meeting-widget-starter/**

## 🚀 Project Setup

The project uses environment variables to configure the Webex API Integration.

### Prerequisites

- Node.js 14.x or later
- Yarn or npm package manager
- Valid Webex Integration from [Webex Developer Portal](https://developer.webex.com/my-apps)

### Installation & Configuration

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd webex-meeting-widget-starter
   ```

2. **Install dependencies:**
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Configure environment variables:**

   #### Usage with `.env`
   
   Project configuration lives in a `.env` file. A sample `.env.sample` has been provided for ease of use.
   
   - Rename the `.env.sample` file to `.env`
   - Fill in your client ID provided from the [Webex Developer Portal](https://developer.webex.com/my-apps)
   
   ```bash
   # Copy the sample file
   cp .env.sample .env
   
   # Edit the .env file with your credentials
   REACT_APP_WEBEX_CLIENT_ID=your_client_id_here
   REACT_APP_WEBEX_BASE_URL=https://webexapis.com/v1/authorize
   ```

4. **Start the development server:**
   ```bash
   yarn start
   ```

5. **Access the application:**
   - Open [http://localhost:3000](http://localhost:3000) to view it in the browser
   - Click "Login to Webex" to authenticate
   - Enter a meeting destination when prompted

## 📖 Usage Guide

### Authentication Flow

1. **Initial Load:**
   - Application checks for existing OAuth token
   - If no token exists, displays OAuth login link

2. **OAuth Login:**
   - Redirects to Webex OAuth authorization page
   - User grants permissions to the application
   - Returns with access token in URL hash

3. **Token Management:**
   - Custom hook extracts and stores token securely
   - Clears sensitive data from URL for security

### Meeting Widget Integration

```javascript
// Simple widget integration
<WebexMeetingWidget
  accessToken={webexToken}
  meetingDestination={destination}
/>
```

### Supported Destinations

| Destination Type | Format | Example |
|------------------|--------|---------|
| **Email Address** | user@domain.com | john.doe@company.com |
| **User ID** | Webex User ID | Y2lzY29zcGFyazovL3VzL1BFT1BMRS... |
| **Room ID** | Webex Room ID | Y2lzY29zcGFyazovL3VzL1JPT00v... |
| **SIP Address** | SIP URI | meeting@example.webex.com |

### Important SIP Notes

- **Supported**: Webex meetings SIP URIs and Webex cloud-registered devices
- **Not Supported**: Webex Calling or third-party SIP URIs

## 🏗️ Project Structure

```
webex-meeting-widget-starter/
├── public/
│   ├── index.html              # Main HTML template
│   ├── favicon.ico             # Site favicon
│   ├── manifest.json           # PWA manifest
│   └── robots.txt             # Search engine directives
├── src/
│   ├── App.js                 # Main application component
│   ├── App.css                # Application styles
│   ├── OAuthLink.js           # OAuth authorization link component
│   ├── WebexMeeting.js        # Meeting widget container
│   ├── WebexMeeting.css       # Meeting widget styles
│   ├── WebexMeetingDestination.js  # Destination input component
│   ├── WebexMeetingDestination.css # Destination input styles
│   ├── useCurrentUri.js       # Hook for current URL handling
│   ├── useWebexOAuth.js       # Hook for OAuth token management
│   └── index.js               # React application entry point
├── .env.sample                # Environment variables template
├── package.json               # Dependencies and scripts
├── LICENSE                    # Cisco Sample Code License
└── README.md                  # This documentation
```

### Core Components

| Component | Description | File Location |
|-----------|-------------|---------------|
| **App** | Main application container and routing logic | [`App.js`](src/App.js) |
| **OAuthLink** | Webex OAuth authorization link generator | [`OAuthLink.js`](src/OAuthLink.js) |
| **WebexMeeting** | Meeting widget wrapper and state management | [`WebexMeeting.js`](src/WebexMeeting.js) |
| **WebexMeetingDestination** | User input form for meeting destinations | [`WebexMeetingDestination.js`](src/WebexMeetingDestination.js) |
| **useWebexOAuth** | OAuth token extraction and management hook | [`useWebexOAuth.js`](src/useWebexOAuth.js) |
| **useCurrentUri** | Current URL formatting for OAuth redirect | [`useCurrentUri.js`](src/useCurrentUri.js) |

### Application Flow

```javascript
// 1. Initial load - check for token
const webexToken = useWebexOAuth();
const redirectURI = useCurrentUri();

// 2. Conditional rendering based on authentication
{webexToken ? 
  <WebexMeeting webexToken={webexToken} /> : 
  <OAuthLink clientID={clientID} redirectURI={redirectURI} />
}

// 3. Widget rendering after destination selection
<WebexMeetingWidget
  accessToken={webexToken}
  meetingDestination={destination}
/>
```

## 🎨 Widget Integration

### Dependencies

```javascript
// Required widget dependencies
import {WebexMeetingWidget} from '@webex/widgets';
import '@webex/widgets/dist/webexWidgets.css';
```

### Widget Configuration

```javascript
// Minimal widget setup
function WebexMeeting({webexToken}) {
  const [destination, setDestination] = useState(null);
  
  return (
    <WebexMeetingWidget
      accessToken={webexToken}
      meetingDestination={destination}
    />
  );
}
```

### OAuth Configuration

```javascript
// OAuth link generation
const oauthURL = `${webexAPIBaseURL}?client_id=${clientID}&response_type=token&redirect_uri=${redirectURI}&scope=spark%3Aall%20spark%3Akms`;
```

## 📜 Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn deploy`

Deploys the built application to GitHub Pages.
This is configured with the `predeploy` script that automatically builds before deployment.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## 🔧 Configuration

### Environment Variables

```bash
# Required environment variables
REACT_APP_WEBEX_CLIENT_ID=your_webex_client_id
REACT_APP_WEBEX_BASE_URL=https://webexapis.com/v1/authorize
```

### OAuth Scopes

The application requests the following OAuth scopes:
- `spark:all` - Full access to Webex APIs
- `spark:kms` - Key Management Service access for secure meetings

### Redirect URI Configuration

The application automatically configures the redirect URI based on the current deployment URL:
- Development: `http://localhost:3000`
- Production: Your deployed domain (GitHub Pages, etc.)

## 🧪 Testing

### Manual Testing

1. **Authentication Flow:**
   - Test OAuth login process
   - Verify token extraction and storage
   - Check redirect URI handling

2. **Widget Functionality:**
   - Test different destination types (email, user ID, room ID, SIP)
   - Verify meeting widget loads correctly
   - Test meeting controls and features

3. **Responsive Design:**
   - Test on different screen sizes
   - Verify mobile compatibility
   - Check widget responsiveness

### Browser Compatibility

| Browser | Version | Widget Support |
|---------|---------|----------------|
| Chrome | 90+ | ✅ Full Support |
| Firefox | 88+ | ✅ Full Support |
| Safari | 14+ | ✅ Full Support |
| Edge | 90+ | ✅ Full Support |

## 🚨 Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| **OAuth Login Fails** | Verify client ID and redirect URI configuration |
| **Widget Not Loading** | Check access token validity and destination format |
| **Destination Invalid** | Ensure destination follows supported format patterns |
| **CORS Errors** | Verify redirect URI matches your domain exactly |

### Debug Tips

```javascript
// Enable widget debugging
console.log('Token:', webexToken);
console.log('Destination:', destination);

// Check OAuth hash parameters
console.log('URL Hash:', window.location.hash);
```

## 🤝 Contributing

We truly appreciate your contribution to the Webex Samples!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/widget-enhancement`
3. Commit changes: `git commit -am 'Add widget feature'`
4. Push to branch: `git push origin feature/widget-enhancement`
5. Submit a Pull Request

### Development Guidelines

- Follow React functional component patterns
- Use PropTypes for component validation
- Maintain OAuth security best practices
- Test widget integration thoroughly
- Update documentation for new features

## 📚 Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Additional Resources

- [Webex Widgets Documentation](https://github.com/webex/widgets)
- [Webex Integration Guide](https://developer.webex.com/docs/integrations)
- [OAuth 2.0 Implicit Grant Flow](https://developer.webex.com/docs/oauth-implicit-grant-flow)
- [Webex Meeting Destinations](https://developer.webex.com/docs/meetings#meeting-destinations)

## 📄 License

This project is licensed under the Cisco Sample Code License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For technical support and questions:

- **Issues**: Submit via GitHub Issues
- **Widget Documentation**: [Webex Widgets Repository](https://github.com/webex/widgets)
- **API Documentation**: [Webex Developer Portal](https://developer.webex.com)
- **Community**: [Webex Developer Community](https://developer.webex.com/community)

## Thanks!

Made with ❤️ by the Webex Developer Relations Team at Cisco

---

**Note**: This starter template provides a foundation for integrating Webex Meeting Widgets. For production use, consider additional security measures, error handling, and user experience optimizations.
