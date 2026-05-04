import sys

path = "/Users/choegil/owners korea/src/pages/StartupSupportPage.css"
with open(path, 'r') as f:
    lines = f.readlines()

# Find the start of the indicator styles
start_idx = -1
for i, line in enumerate(lines):
    if "/* Vertical Indicator v5 - Refined & Premium (Left Position) */" in line:
        start_idx = i
        break

if start_idx != -1:
    new_content = [
        "\n",
        "/* Vertical Indicator v5 - Minimalist (Right Position) */\n",
        ".startup-indicator-v5 {\n",
        "  position: fixed;\n",
        "  right: 3rem; /* Back to Right */\n",
        "  top: 50%;\n",
        "  transform: translateY(-50%);\n",
        "  display: flex;\n",
        "  flex-direction: column;\n",
        "  gap: 2rem;\n",
        "  z-index: 1000;\n",
        "  /* Background removed as requested */\n",
        "}\n",
        "\n",
        ".indicator-dot-v5 {\n",
        "  width: 12px;\n",
        "  height: 12px;\n",
        "  border-radius: 50%;\n",
        "  background: rgba(255, 255, 255, 0.2);\n",
        "  cursor: pointer;\n",
        "  position: relative;\n",
        "  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);\n",
        "}\n",
        "\n",
        ".indicator-dot-v5:hover {\n",
        "  background: rgba(255, 255, 255, 0.6);\n",
        "  transform: scale(1.2);\n",
        "}\n",
        "\n",
        ".indicator-dot-v5.active {\n",
        "  background: #C5A16F; /* Premium Gold */\n",
        "  transform: scale(1.5);\n",
        "  box-shadow: 0 0 15px rgba(197, 161, 111, 0.5);\n",
        "}\n",
        "\n",
        "@media (max-width: 991px) {\n",
        "  .startup-indicator-v5 {\n",
        "    display: none;\n",
        "  }\n",
        "}\n"
    ]
    # Replace from start_idx to the end
    lines = lines[:start_idx] + new_content
    with open(path, 'w') as f:
        f.writelines(lines)
    print("Successfully updated CSS to Right and Removed Background")
else:
    print("Could not find start marker")
