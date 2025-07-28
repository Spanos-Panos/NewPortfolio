# Claude Sonnet 4 Optimized Blazor WebAssembly Template

> **Optimized for Claude Sonnet 4 Model in VS Code Copilot**
> 
> This template leverages Claude Sonnet 4's advanced reasoning capabilities, superior architectural understanding, and enhanced code synthesis. It emphasizes sophisticated patterns, comprehensive context analysis, and intelligent problem-solving approaches that align with Sonnet 4's cutting-edge AI capabilities.

## Template Philosophy

This template creates a clean, minimal Blazor WebAssembly project with Tailwind CSS, designed with Claude Sonnet 4's strengths in:
- **Advanced Reasoning**: Multi-step logical analysis and architectural planning
- **Sophisticated Pattern Recognition**: Understanding complex relationships and dependencies
- **Enhanced Code Synthesis**: Superior ability to generate optimized, maintainable code
- **Intelligent Context Integration**: Deep understanding of cross-component interactions

## Architectural Overview

The template follows a modular architecture where each component is self-contained yet integrates seamlessly:

```
Application Architecture:
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Layout Layer  │    │  Page Layer     │    │  Shared Layer   │
│  - MainLayout   │    │  - Home.razor   │    │  - Components   │
│  - NavMenu      │    │                 │    │  - Sections     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    ┌─────────────────┐
                    │   Asset Layer   │
                    │  - CSS Files    │
                    │  - JS Files     │
                    └─────────────────┘
```

## Project Structure with Contextual Relationships

```
ProjectName/                              # Root: Contains all project files
├── Layout/                               # Layout Components: App-wide UI structure
│   ├── MainLayout.razor                  # Primary layout wrapper
│   └── NavMenu.razor                     # Navigation component with mobile support
├── Pages/                                # Page Components: Route-level components
│   └── Home.razor                        # Main page orchestrating all sections
├── Properties/                           # Configuration: Development settings
│   └── launchSettings.json              # Launch profiles and environment config
├── Shared/                               # Shared Components: Reusable UI sections
│   ├── Hero.razor                        # Landing section with call-to-action
│   ├── CustomSection1.razor             # Flexible content section (About/Services)
│   ├── CustomSection2.razor             # Feature showcase section
│   └── Contact.razor                     # Contact form and information
├── wwwroot/                              # Static Assets: Client-side resources
│   ├── index.html                        # HTML entry point with asset references
│   └── Assets/                           # Organized asset hierarchy
│       ├── css/                          # Stylesheets: Component-specific styling
│       │   ├── app.css                   # Application-wide styles and imports
│       │   ├── global.css                # Global variables and base styles
│       │   ├── MainLayout.css            # Layout-specific styling
│       │   ├── NavMenu.css               # Navigation styling with states
│       │   ├── Hero.css                  # Hero section visual treatment
│       │   ├── CustomSection1.css        # Section 1 styling and layout
│       │   ├── CustomSection2.css        # Section 2 card-based layout
│       │   └── Contact.css               # Form styling and interaction states
│       └── js/                           # JavaScript: Client-side functionality
│           └── navigation.js             # Smooth scrolling and navigation logic
├── _Imports.razor                        # Global Imports: Shared using statements
├── App.razor                             # App Root: Routing and error handling
├── Program.cs                            # Entry Point: Service configuration
├── ProjectName.csproj                    # Project Definition: Dependencies and settings
├── package.json                          # NPM Configuration: Tailwind and tools
├── tailwind.config.js                    # Tailwind Setup: Content paths and plugins
├── postcss.config.js                     # PostCSS Setup: CSS processing pipeline
└── tailwind.css                          # Tailwind Source: Utility imports
```

## Implementation Strategy

### Phase 1: Foundation Setup

#### Step 1: Project Initialization
Create the Blazor WebAssembly foundation with clean structure:

```bash
# Create project with explicit naming convention
dotnet new blazorwasm -n [ProjectName] --no-https

# Navigate to establish working context
cd [ProjectName]

# Remove default boilerplate that conflicts with our architecture
Remove-Item -Recurse -Force "SampleData" -ErrorAction SilentlyContinue
```

#### Step 2: Project Configuration
Configure the project file to establish dependencies and target framework:

```xml
<Project Sdk="Microsoft.NET.Sdk.BlazorWebAssembly">

  <PropertyGroup>
    <TargetFramework>net9.0</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="Microsoft.AspNetCore.Components.WebAssembly" Version="9.0.1" />
    <PackageReference Include="Microsoft.AspNetCore.Components.WebAssembly.DevServer" Version="9.0.1" PrivateAssets="all" />
  </ItemGroup>

</Project>
```

### Phase 2: Styling Infrastructure

#### Step 3: Tailwind CSS Ecosystem Setup

**NPM Configuration** (`package.json`):
```json
{
  "name": "portfolio",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "build-css": "tailwindcss -i ./tailwind.css -o ./wwwroot/tailwind.css --watch",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "@tailwindcss/forms": "^0.5.10",
    "@tailwindcss/typography": "^0.5.16",
    "autoprefixer": "^10.4.21",
    "postcss": "^8.5.6",
    "postcss-cli": "^11.0.1",
    "tailwindcss": "^3.4.17"
  }
}
```

**Tailwind Configuration** (`tailwind.config.js`):
```javascript
module.exports = {
  // Content sources for class detection
  content: [
    './**/*.{razor,html,cshtml}',
    './wwwroot/index.html',
  ],
  theme: {
    extend: {
      // Future customizations will extend default theme
    },
  },
  plugins: [
    require('@tailwindcss/forms'),      // Enhanced form styling
    require('@tailwindcss/typography'), // Rich text formatting
  ],
};
```

**PostCSS Pipeline** (`postcss.config.js`):
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},    // Process Tailwind directives
    autoprefixer: {},   // Add vendor prefixes
  },
};
```

**Tailwind Source** (`tailwind.css`):
```css
@tailwind base;        /* Reset and base styles */
@tailwind components;  /* Component classes */
@tailwind utilities;   /* Utility classes */
```

#### Step 4: Dependency Installation and Build
```bash
# Install NPM dependencies for Tailwind ecosystem
npm install

# Generate initial CSS build
npm run build-css
```

#### Step 5: Asset Organization
Establish the asset hierarchy that supports the modular CSS architecture:

```powershell
# Create structured asset directories
New-Item -ItemType Directory -Path "wwwroot\Assets\css" -Force
New-Item -ItemType Directory -Path "wwwroot\Assets\js" -Force

# Clean up default Blazor artifacts that conflict with our structure
Remove-Item -Recurse -Force "SampleData" -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force "wwwroot\sample-data" -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force "wwwroot\css" -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force "wwwroot\lib" -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force "Layout\*.css" -ErrorAction SilentlyContinue
Remove-Item -Path "wwwroot\*.png" -ErrorAction SilentlyContinue
Remove-Item -Path "wwwroot\*.ico" -ErrorAction SilentlyContinue
```

## Component Implementation

### Core Application Components

#### Application Entry Point (`Program.cs`)
```csharp
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using [ProjectName];

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddScoped(sp => new HttpClient { 
    BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) 
});

await builder.Build().RunAsync();
```

#### Router Configuration (`App.razor`)
```razor
<Router AppAssembly="@typeof(App).Assembly">
    <Found Context="routeData">
        <RouteView RouteData="@routeData" DefaultLayout="@typeof(Layout.MainLayout)" />
    </Found>
    <NotFound>
        <PageTitle>Not found</PageTitle>
        <LayoutView Layout="@typeof(Layout.MainLayout)">
            <p class="text-center text-xl mt-10">Sorry, there's nothing at this address.</p>
        </LayoutView>
    </NotFound>
</Router>
```

#### Global Imports (`_Imports.razor`)
```razor
@using System.Net.Http
@using System.Net.Http.Json
@using Microsoft.AspNetCore.Components.Forms
@using Microsoft.AspNetCore.Components.Routing
@using Microsoft.AspNetCore.Components.Web
@using Microsoft.AspNetCore.Components.Web.Virtualization
@using Microsoft.AspNetCore.Components.WebAssembly.Http
@using Microsoft.JSInterop
@using [ProjectName]
@using [ProjectName].Shared
```

### Layout Architecture

#### Main Layout Foundation (`Layout/MainLayout.razor`)
```razor
@inherits LayoutComponentBase

<NavMenu />
<main>
    @Body
</main>
```

#### Navigation System (`Layout/NavMenu.razor`)
This component demonstrates responsive design patterns and state management:

```razor
<nav class="bg-white shadow-lg fixed w-full top-0 z-50">
    <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between items-center h-16">
            <!-- Brand Identity -->
            <div class="flex-shrink-0">
                <a href="#hero" class="text-xl font-bold text-gray-800">[Your Brand]</a>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                    <a href="#hero" class="nav-link">Home</a>
                    <a href="#custom1" class="nav-link">Section 1</a>
                    <a href="#custom2" class="nav-link">Section 2</a>
                    <a href="#contact" class="nav-link">Contact</a>
                </div>
            </div>

            <!-- Mobile Menu Toggle -->
            <div class="md:hidden">
                <button @onclick="ToggleMenu" class="text-gray-800 hover:text-gray-600 focus:outline-none">
                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path class="@(isMenuOpen ? "hidden" : "inline-flex")" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        <path class="@(isMenuOpen ? "inline-flex" : "hidden")" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Navigation Menu -->
        <div class="@(isMenuOpen ? "block" : "hidden") md:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#hero" class="mobile-nav-link" @onclick="CloseMenu">Home</a>
                <a href="#custom1" class="mobile-nav-link" @onclick="CloseMenu">Section 1</a>
                <a href="#custom2" class="mobile-nav-link" @onclick="CloseMenu">Section 2</a>
                <a href="#contact" class="mobile-nav-link" @onclick="CloseMenu">Contact</a>
            </div>
        </div>
    </div>
</nav>

@code {
    private bool isMenuOpen = false;

    private void ToggleMenu()
    {
        isMenuOpen = !isMenuOpen;
    }

    private void CloseMenu()
    {
        isMenuOpen = false;
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            await JSRuntime.InvokeVoidAsync("addSmoothScrolling");
        }
    }

    [Inject]
    private IJSRuntime JSRuntime { get; set; } = default!;
}
```

### Page Orchestration

#### Home Page Composition (`Pages/Home.razor`)
The home page demonstrates component composition and section ordering:

```razor
@page "/"

<Hero />
<CustomSection1 />
<CustomSection2 />
<Contact />
```

### Content Sections

#### Hero Section (`Shared/Hero.razor`)
The hero section establishes visual hierarchy and initial user engagement:

```razor
@namespace [ProjectName].Shared

<section id="hero" class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 text-white pt-16">
    <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
            <span class="block">[Main Heading]</span>
            <span class="block text-yellow-300">[Highlighted Text]</span>
            <span class="block text-lg md:text-xl font-normal mt-2">[Subtitle]</span>
        </h1>
        
        <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            [Your description or tagline goes here. Customize this section as needed.]
        </p>
        
        <div class="space-x-4">
            <a href="#contact" class="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300">
                [Button 1 Text]
            </a>
            <a href="#custom1" class="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300">
                [Button 2 Text]
            </a>
        </div>
    </div>
</section>
```

#### Adaptive Content Section (`Shared/CustomSection1.razor`)
This section demonstrates flexible layout patterns and content hierarchy:

```razor
@namespace [ProjectName].Shared

<section id="custom1" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">[Section 1 Title - About Us/Services/Features]</h2>
            
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <!-- Content Column -->
                <div>
                    <h3 class="text-2xl font-semibold mb-4 text-gray-800">[Left Column Title]</h3>
                    <p class="text-gray-600 mb-4">
                        [Add your business description, story, or key information here. This section is completely 
                        flexible and can describe your company, mission, values, or main services.]
                    </p>
                    <p class="text-gray-600 mb-6">
                        [Add more details about what makes your business unique, your experience, 
                        or additional information that potential customers should know.]
                    </p>
                    <a href="#contact" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block">
                        [Call to Action Button]
                    </a>
                </div>
                
                <!-- Features Column -->
                <div>
                    <h3 class="text-2xl font-semibold mb-6 text-gray-800">[Right Column Title - Features/Benefits]</h3>
                    <div class="space-y-4">
                        <!-- Feature Item Pattern -->
                        <div class="flex items-start">
                            <div class="bg-blue-600 text-white p-2 rounded-lg mr-4 flex-shrink-0">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-800">[Feature/Benefit 1]</h4>
                                <p class="text-gray-600">[Brief description of this feature or benefit]</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="bg-green-600 text-white p-2 rounded-lg mr-4 flex-shrink-0">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-800">[Feature/Benefit 2]</h4>
                                <p class="text-gray-600">[Brief description of this feature or benefit]</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="bg-purple-600 text-white p-2 rounded-lg mr-4 flex-shrink-0">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-800">[Feature/Benefit 3]</h4>
                                <p class="text-gray-600">[Brief description of this feature or benefit]</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```

#### Services Showcase Section (`Shared/CustomSection2.razor`)
This section demonstrates card-based layouts and scalable content patterns:

```razor
@namespace [ProjectName].Shared

<section id="custom2" class="py-20 bg-white">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">[Section 2 Title - Services/Products/Offerings]</h2>
        
        <div class="max-w-6xl mx-auto">
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Service Card Pattern -->
                <div class="text-center bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                    <div class="bg-blue-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-4 text-gray-800">[Service/Product 1]</h3>
                    <p class="text-gray-600 mb-4">[Brief description of your first service or product offering]</p>
                    <ul class="text-left space-y-2">
                        <li class="flex items-center text-gray-600">
                            <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                            [Key feature or benefit 1]
                        </li>
                        <li class="flex items-center text-gray-600">
                            <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                            [Key feature or benefit 2]
                        </li>
                        <li class="flex items-center text-gray-600">
                            <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                            [Key feature or benefit 3]
                        </li>
                    </ul>
                </div>

                <div class="text-center bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                    <div class="bg-green-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-4 text-gray-800">[Service/Product 2]</h3>
                    <p class="text-gray-600 mb-4">[Brief description of your second service or product offering]</p>
                    <ul class="text-left space-y-2">
                        <li class="flex items-center text-gray-600">
                            <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                            [Key feature or benefit 1]
                        </li>
                        <li class="flex items-center text-gray-600">
                            <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                            [Key feature or benefit 2]
                        </li>
                        <li class="flex items-center text-gray-600">
                            <span class="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                            [Key feature or benefit 3]
                        </li>
                    </ul>
                </div>

                <div class="text-center bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                    <div class="bg-purple-600 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-4 text-gray-800">[Service/Product 3]</h3>
                    <p class="text-gray-600 mb-4">[Brief description of your third service or product offering]</p>
                    <ul class="text-left space-y-2">
                        <li class="flex items-center text-gray-600">
                            <span class="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                            [Key feature or benefit 1]
                        </li>
                        <li class="flex items-center text-gray-600">
                            <span class="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                            [Key feature or benefit 2]
                        </li>
                        <li class="flex items-center text-gray-600">
                            <span class="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                            [Key feature or benefit 3]
                        </li>
                    </ul>
                </div>
            </div>
            
            <!-- Call to Action -->
            <div class="text-center mt-12">
                <p class="text-lg text-gray-600 mb-6">[Add a call to action or additional information here]</p>
                <a href="#contact" class="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block font-semibold">
                    [Contact Button Text]
                </a>
            </div>
        </div>
    </div>
</section>
```

#### Contact Interface (`Shared/Contact.razor`)
This section demonstrates form design patterns and information architecture:

```razor
@namespace [ProjectName].Shared

<section id="contact" class="py-20 bg-white">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Get In Touch</h2>
        
        <div class="max-w-4xl mx-auto">
            <div class="grid md:grid-cols-2 gap-12">
                <!-- Contact Information -->
                <div>
                    <h3 class="text-2xl font-semibold mb-6 text-gray-800">Let's Connect</h3>
                    <p class="text-gray-600 mb-8">
                        [Add your personal message about wanting to connect, collaborate, or work together.]
                    </p>
                    
                    <div class="space-y-4">
                        <!-- Contact Method Pattern -->
                        <div class="flex items-center">
                            <div class="bg-blue-600 text-white p-2 rounded-lg mr-4">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-800">Email</h4>
                                <p class="text-gray-600">[your.email@example.com]</p>
                            </div>
                        </div>
                        
                        <div class="flex items-center">
                            <div class="bg-purple-600 text-white p-2 rounded-lg mr-4">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-800">LinkedIn</h4>
                                <p class="text-gray-600">[Your LinkedIn Profile]</p>
                            </div>
                        </div>
                        
                        <div class="flex items-center">
                            <div class="bg-green-600 text-white p-2 rounded-lg mr-4">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-800">GitHub</h4>
                                <p class="text-gray-600">[Your GitHub Profile]</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Contact Form -->
                <div>
                    <form class="space-y-6">
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name</label>
                            <input type="text" id="name" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name">
                        </div>
                        
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input type="email" id="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="your.email@example.com">
                        </div>
                        
                        <div>
                            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea id="message" rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your message here..."></textarea>
                        </div>
                        
                        <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
```

## Static Assets and Resources

### HTML Foundation (`wwwroot/index.html`)
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>[Your Site Title]</title>
    <base href="/" />
    
    <!-- Tailwind CSS Output -->
    <link href="tailwind.css" rel="stylesheet">
    
    <!-- Component-Specific Stylesheets -->
    <link href="Assets/css/app.css" rel="stylesheet">
    <link href="Assets/css/global.css" rel="stylesheet">
    <link href="Assets/css/MainLayout.css" rel="stylesheet">
    <link href="Assets/css/NavMenu.css" rel="stylesheet">
    <link href="Assets/css/Hero.css" rel="stylesheet">
    <link href="Assets/css/CustomSection1.css" rel="stylesheet">
    <link href="Assets/css/CustomSection2.css" rel="stylesheet">
    <link href="Assets/css/Contact.css" rel="stylesheet">
</head>

<body>
    <div id="app"></div>

    <script src="_framework/blazor.webassembly.js"></script>
    <script src="Assets/js/navigation.js"></script>
</body>

</html>
```

## Styling Architecture

### Global Foundation (`wwwroot/Assets/css/global.css`)
This file establishes the CSS architecture that Claude Sonnet 4 can understand and extend:

```css
/* Global CSS Foundation - Claude Sonnet 4 Optimized */

/* CSS Custom Properties: Centralized Design System */
:root {
    --primary-color: #3b82f6;      /* Primary brand color */
    --secondary-color: #8b5cf6;    /* Secondary accent */
    --accent-color: #10b981;       /* Success/accent color */
    --background-color: #ffffff;   /* Base background */
    --text-primary: #1f2937;       /* Primary text */
    --text-secondary: #6b7280;     /* Secondary text */
    --border-color: #e5e7eb;       /* Border and divider color */
}

/* Universal Reset and Box Model */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Base Typography and Layout */
body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    line-height: 1.6;
    color: var(--text-primary);
    background-color: white;
    scroll-behavior: smooth;
}

/* Claude Sonnet 4 Architectural Pattern: Global Background System */
/* 
   This system provides a predictable base that can be systematically overridden.
   Each section starts with white background, maintaining consistency while 
   allowing targeted customization through CSS specificity.
*/

/* Base section styling */
section {
    background-color: white;
}

/* Explicit background declarations for main sections */
/* These can be overridden in individual component CSS files */
#hero,
#custom1, 
#custom2,
#contact {
    background-color: white;
}

/* Container Pattern: Consistent Max-Width and Centering */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

/* Utility Component Patterns */
.btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
}

.btn-primary {
    background-color: var(--primary-color);
    color: white;
}

.btn-primary:hover {
    background-color: #2563eb;
    transform: translateY(-2px);
}

/* Card Component Pattern */
.card {
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

/* Responsive Design Foundation */
@media (max-width: 768px) {
    .container {
        padding: 0 1rem;
    }
}
```

### JavaScript Functionality (`wwwroot/Assets/js/navigation.js`)
```javascript
// Navigation Enhancement - Claude Sonnet 4 Optimized
// Provides smooth scrolling behavior for anchor navigation

function addSmoothScrolling() {
    // Select all anchor links that reference page sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Find the target element
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                // Smooth scroll to target with proper alignment
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize smooth scrolling when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    addSmoothScrolling();
});
```

### Component-Specific Styling

#### Application Styles (`wwwroot/Assets/css/app.css`)
```css
/* Application-Wide Styles - Claude Sonnet 4 Pattern */
@import 'global.css';

/* Application Container Architecture */
.app-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

main {
    flex: 1;
}

/* Additional application-wide styles extend from here */
```

#### Layout Styles (`wwwroot/Assets/css/MainLayout.css`)
```css
/* MainLayout Component Styles - Claude Sonnet 4 Optimized */

/* Layout Container Pattern */
.app-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

main {
    flex: 1;
}

/* Layout-specific customizations */
```

#### Navigation Styles (`wwwroot/Assets/css/NavMenu.css`)
```css
/* Navigation Component Styles - Claude Sonnet 4 Architecture */

/* Base Navigation Styling */
nav {
    /* Default white background - can be overridden */
    background-color: white;
    
    /* Claude Sonnet 4 Override Examples: */
    /* background-color: rgba(255, 255, 255, 0.95); */ /* Semi-transparent */
    /* background: linear-gradient(90deg, #ffffff 0%, #f8fafc 100%); */ /* Gradient */
    /* backdrop-filter: blur(10px); */ /* Glass morphism effect */
}

/* Navigation Link State Management */
.nav-link {
    @apply text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300;
}

.nav-link:hover {
    background-color: rgba(59, 130, 246, 0.1);
}

.mobile-nav-link {
    @apply text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300;
}

.mobile-nav-link:hover {
    background-color: rgba(59, 130, 246, 0.1);
}

/* Mobile Menu Styling */
.mobile-menu {
    background-color: white;
    border-top: 1px solid #e5e7eb;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Brand Identity Styling */
.nav-brand {
    font-weight: 700;
    font-size: 1.25rem;
    color: #1f2937;
    text-decoration: none;
    transition: color 0.3s ease;
}

.nav-brand:hover {
    color: #3b82f6;
}

/* Interactive Elements */
.mobile-menu-button {
    padding: 0.5rem;
    border-radius: 6px;
    transition: background-color 0.3s ease;
}

.mobile-menu-button:hover {
    background-color: rgba(107, 114, 128, 0.1);
}

/* Active State Management */
.nav-link.active,
.mobile-nav-link.active {
    color: #3b82f6;
    background-color: rgba(59, 130, 246, 0.1);
}

/* Advanced Navigation States */
.nav-scrolled {
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
```

#### Hero Section Styles (`wwwroot/Assets/css/Hero.css`)
```css
/* Hero Section Styles - Claude Sonnet 4 Background Override Pattern */

#hero {
    /* Background Override Example: Gradient replaces global white */
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    
    /* Claude Sonnet 4 Alternative Patterns: */
    /* background-color: #1f2937; */ /* Solid color override */
    /* background-image: url('/Assets/images/hero-bg.jpg'); */ /* Image background */
    /* background-size: cover; */
    /* background-position: center; */
    /* background-attachment: fixed; */ /* Parallax effect */
}

/* Hero-Specific Typography */
#hero h1 {
    /* Custom hero heading styles */
}

#hero .hero-button {
    /* Custom button styles for hero context */
}

/* Animation Patterns for Enhanced UX */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

#hero .animate-fade-in {
    animation: fadeInUp 1s ease-out;
}
```

#### Custom Section Styles (`wwwroot/Assets/css/CustomSection1.css`)
```css
/* Custom Section 1 Styles - Claude Sonnet 4 Override Architecture */

#custom1 {
    /* Background Override: Light gray replaces global white */
    background-color: #f9fafb;
    
    /* Claude Sonnet 4 Alternative Patterns: */
    /* background: linear-gradient(45deg, #f0f9ff 0%, #e0e7ff 100%); */ /* Gradient */
    /* background-image: url('/Assets/images/section1-bg.jpg'); */ /* Image */
    /* background-size: cover; */
    /* background-blend-mode: overlay; */ /* Image blending */
}

/* Component-Specific Patterns */
#custom1 .feature-card {
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

#custom1 .feature-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* Icon Container Pattern */
#custom1 .section-icon {
    width: 3rem;
    height: 3rem;
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

#### Services Section Styles (`wwwroot/Assets/css/CustomSection2.css`)
```css
/* Custom Section 2 Styles - Claude Sonnet 4 Default Background Pattern */

#custom2 {
    /* Maintains global white background (no override needed) */
    /* background-color: white; */ /* Already set by global.css */
    
    /* Claude Sonnet 4 Override Options: */
    /* background-color: #f8fafc; */ /* Light background */
    /* background: linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%); */ /* Subtle gradient */
    /* background-image: url('/Assets/images/section2-pattern.svg'); */ /* Pattern overlay */
    /* background-repeat: repeat; */
}

/* Service Card Architecture */
#custom2 .service-card {
    background: #f9fafb;
    border-radius: 12px;
    padding: 2rem;
    transition: all 0.3s ease;
    border: 1px solid #e5e7eb;
}

#custom2 .service-card:hover {
    background: white;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
    border-color: #d1d5db;
}

/* Icon System */
#custom2 .service-icon {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
}

/* Feature List Styling */
#custom2 .service-feature {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
}

#custom2 .service-feature::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 12px;
    flex-shrink: 0;
}
```

#### Contact Section Styles (`wwwroot/Assets/css/Contact.css`)
```css
/* Contact Section Styles - Claude Sonnet 4 Form Architecture */

#contact {
    /* Background Options - Default white or custom override */
    /* background-color: white; */ /* Default from global.css */
    
    /* Claude Sonnet 4 Override Patterns: */
    /* background-color: #f8fafc; */ /* Light background */
    /* background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%); */ /* Gradient */
    /* background-image: url('/Assets/images/contact-bg.jpg'); */ /* Image background */
    /* background-size: cover; */
    /* background-position: center; */
}

/* Form Container Styling */
.contact-form {
    background: #f9fafb;
    border-radius: 12px;
    padding: 2rem;
    border: 1px solid #e5e7eb;
}

/* Form Input Architecture */
#contact input,
#contact textarea {
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

#contact input:focus,
#contact textarea:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    outline: none;
}

/* Contact Information Cards */
#contact .contact-info-item {
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    border: 1px solid #f3f4f6;
    transition: all 0.3s ease;
}

#contact .contact-info-item:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
}

/* Icon System */
#contact .contact-icon {
    width: 3rem;
    height: 3rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
}

/* Interactive Elements */
#contact .submit-button {
    transition: all 0.3s ease;
}

#contact .submit-button:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}
```

### Configuration Files

#### Launch Settings (`Properties/launchSettings.json`)
```json
{
  "iisSettings": {
    "windowsAuthentication": false,
    "anonymousAuthentication": true,
    "iisExpress": {
      "applicationUrl": "http://localhost:63353",
      "sslPort": 0
    }
  },
  "profiles": {
    "http": {
      "commandName": "Project",
      "dotnetRunMessages": true,
      "launchBrowser": true,
      "inspectUri": "{wsProtocol}://{url.hostname}:{url.port}/_framework/debug/ws-proxy?browser={browserInspectUri}",
      "applicationUrl": "http://localhost:5000",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      }
    },
    "IIS Express": {
      "commandName": "IISExpress",
      "launchBrowser": true,
      "inspectUri": "{wsProtocol}://{url.hostname}:{url.port}/_framework/debug/ws-proxy?browser={browserInspectUri}",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      }
    }
  }
}
```

## Development Workflow

### Build and Run Sequence

1. **Prerequisites Verification**
   - .NET 9 SDK installed and accessible
   - Node.js and npm available for Tailwind processing

2. **Project Initialization**
   - Create project structure as defined above
   - Install NPM dependencies: `npm install`

3. **Asset Compilation**
   - Build Tailwind CSS: `npm run build-css`
   - Verify CSS output in `wwwroot/tailwind.css`

4. **Development Server**
   - Start development server: `dotnet run`
   - Access application at `http://localhost:5000`

## Claude Sonnet 4 Customization Patterns

### Section Management Architecture

#### Adding New Sections
Claude Sonnet 4 excels at understanding this systematic approach:

1. **Component Creation**: Create new `.razor` file in `Shared/` folder following naming convention
2. **Styling Integration**: Create corresponding `.css` file in `wwwroot/Assets/css/`
3. **Asset Registration**: Add CSS link to `wwwroot/index.html` following established pattern
4. **Page Integration**: Add component to `Pages/Home.razor` in logical order
5. **Navigation Update**: Add navigation link to `Layout/NavMenu.razor` with proper anchoring

#### Removing Sections
Systematic removal following dependency chain:

1. **Page Removal**: Remove component from `Pages/Home.razor`
2. **Navigation Cleanup**: Remove link from `Layout/NavMenu.razor`
3. **Component Deletion**: Remove `.razor` file from `Shared/`
4. **Style Cleanup**: Remove `.css` file from `wwwroot/Assets/css/`
5. **Asset Deregistration**: Remove CSS link from `wwwroot/index.html`

### Background Customization System

Claude Sonnet 4 understands this hierarchical approach:

#### Architectural Principle
- **Base Layer**: Global white background applied to all sections
- **Override Layer**: Section-specific CSS can override global defaults
- **Specificity Hierarchy**: Section selectors have higher specificity than global selectors

#### Implementation Patterns

**Maintaining Default White Background**:
```css
#your-section {
    /* No background declaration needed - inherits global white */
    /* Add other styling properties */
    padding: 2rem;
    /* Global white background remains active */
}
```

**Color Override Pattern**:
```css
#your-section {
    background-color: #f9fafb; /* Overrides global white */
}
```

**Gradient Override Pattern**:
```css
#your-section {
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    /* Completely replaces white background */
}
```

**Image Background Pattern**:
```css
#your-section {
    background-image: url('/Assets/images/your-background.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed; /* Optional parallax effect */
}
```

### Content Customization Strategy

Claude Sonnet 4 recognizes the systematic placeholder replacement pattern:

1. **Placeholder Identification**: All customizable content marked with `[Placeholder Text]`
2. **Context Preservation**: Maintain HTML structure while replacing content
3. **Styling Consistency**: Use existing CSS classes for consistent appearance
4. **Progressive Enhancement**: Start with basic content, enhance with advanced features

### File Organization Principles

Claude Sonnet 4 understands this clear architectural separation:

#### Layout Folder Purity
```
✅ Correct Layout Structure:
Layout/
├── MainLayout.razor    # Layout component only
└── NavMenu.razor       # Navigation component only

❌ Incorrect Layout Structure:
Layout/
├── MainLayout.razor
├── MainLayout.css      # Should be in Assets/css/
├── NavMenu.razor
└── NavMenu.css         # Should be in Assets/css/
```

#### Asset Organization Logic
- **CSS Location**: All stylesheets in `wwwroot/Assets/css/`
- **JavaScript Location**: All scripts in `wwwroot/Assets/js/`
- **Component Correspondence**: Each component has matching CSS file
- **Import Hierarchy**: `app.css` imports `global.css` and extends it

This template is architected to leverage Claude Sonnet 4's strengths in advanced reasoning, sophisticated pattern recognition, and intelligent code synthesis while maintaining clarity and extensibility.
