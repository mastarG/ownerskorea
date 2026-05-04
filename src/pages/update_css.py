import sys

path = "/Users/choegil/owners korea/src/pages/StartupSupportPage.css"
with open(path, 'r') as f:
    lines = f.readlines()

# Find the start of the indicator styles
start_idx = -1
for i, line in enumerate(lines):
    if "/* Vertical Indicator v5 */" in line:
        start_idx = i
        break

if start_idx != -1:
    new_content = [
        "\n",
        "/* Vertical Indicator v5 - Refined & Premium */\n",
        ".startup-indicator-v5 {\n",
        "  position: fixed;\n",
        "  right: 2.5rem;\n",
        "  top: 50%;\n",
        "  transform: translateY(-50%);\n",
        "  display: flex;\n",
        "  flex-direction: column;\n",
        "  gap: 1.2rem;\n",
        "  z-index: 1000;\n",
        "  background: rgba(255, 255, 255, 0.03);\n",
        "  backdrop-filter: blur(20px);\n",
        "  -webkit-backdrop-filter: blur(20px);\n",
        "  padding: 1.5rem 0.6rem;\n",
        "  border-radius: 6px; /* Simpler rectangular feel */\n",
        "  border: 1px solid rgba(255, 255, 255, 0.1);\n",
        "  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);\n",
        "}\n",
        "\n",
        ".indicator-dot-v5 {\n",
        "  width: 8px;\n",
        "  height: 8px;\n",
        "  border-radius: 50%;\n",
        "  background: rgba(255, 255, 255, 0.2);\n",
        "  cursor: pointer;\n",
        "  position: relative;\n",
        "  transition: all 0.3s ease;\n",
        "}\n",
        "\n",
        ".indicator-dot-v5:hover {\n",
        "  background: rgba(255, 255, 255, 0.5);\n",
        "  transform: scale(1.2);\n",
        "}\n",
        "\n",
        ".indicator-dot-v5.active {\n",
        "  background: #C5A16F; /* Premium Gold */\n",
        "  transform: scale(1.4);\n",
        "  box-shadow: 0 0 10px rgba(197, 161, 111, 0.4);\n",
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
    print("Successfully updated CSS")
else:
    print("Could not find start marker")
