import sys

path = "/Users/choegil/owners korea/src/pages/StartupSupportPage.css"
with open(path, 'r') as f:
    lines = f.readlines()

# Find the start of the indicator styles
start_idx = -1
for i, line in enumerate(lines):
    if "/* Vertical Indicator v5 - Refined & Premium */" in line:
        start_idx = i
        break

if start_idx != -1:
    new_content = [
        "\n",
        "/* Vertical Indicator v5 - Refined & Premium (Left Position) */\n",
        ".startup-indicator-v5 {\n",
        "  position: fixed;\n",
        "  left: 3rem; /* Moved to Left */\n",
        "  top: 50%;\n",
        "  transform: translateY(-50%);\n",
        "  display: flex;\n",
        "  flex-direction: column;\n",
        "  gap: 2rem; /* Increased Gap */\n",
        "  z-index: 1000;\n",
        "  background: rgba(255, 255, 255, 0.03);\n",
        "  backdrop-filter: blur(25px);\n",
        "  -webkit-backdrop-filter: blur(25px);\n",
        "  padding: 2rem 0.8rem; /* Increased Padding */\n",
        "  border-radius: 4px; /* Even sharper rectangular feel */\n",
        "  border: 1px solid rgba(255, 255, 255, 0.1);\n",
        "  box-shadow: 20px 0 40px rgba(0, 0, 0, 0.2);\n",
        "  transition: all 0.4s ease;\n",
        "}\n",
        "\n",
        ".indicator-dot-v5 {\n",
        "  width: 12px; /* Increased Size */\n",
        "  height: 12px;\n",
        "  border-radius: 50%;\n",
        "  background: rgba(255, 255, 255, 0.15);\n",
        "  cursor: pointer;\n",
        "  position: relative;\n",
        "  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);\n",
        "}\n",
        "\n",
        ".indicator-dot-v5:hover {\n",
        "  background: rgba(255, 255, 255, 0.4);\n",
        "  transform: scale(1.2);\n",
        "}\n",
        "\n",
        ".indicator-dot-v5.active {\n",
        "  background: #C5A16F; /* Premium Gold */\n",
        "  transform: scale(1.5);\n",
        "  box-shadow: 0 0 15px rgba(197, 161, 111, 0.5);\n",
        "}\n",
        "\n",
        "@media (max-width: 1100px) {\n",
        "  .startup-indicator-v5 {\n",
        "    display: none; /* Hide if screen is too narrow to avoid overlap with left content */\n",
        "  }\n",
        "}\n"
    ]
    # Replace from start_idx to the end
    lines = lines[:start_idx] + new_content
    with open(path, 'w') as f:
        f.writelines(lines)
    print("Successfully updated CSS to Left and Increased Size")
else:
    print("Could not find start marker")
