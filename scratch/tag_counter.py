import sys

content = open(sys.argv[1]).read()
start_line = int(sys.argv[2])
end_line = int(sys.argv[3])

lines = content.split('\n')[start_line-1:end_line]
block = '\n'.join(lines)

open_divs = block.count('<div')
close_divs = block.count('</div>')
open_frags = block.count('<>')
close_frags = block.count('</>')

print(f"Opening Divs: {open_divs}")
print(f"Closing Divs: {close_divs}")
print(f"Opening Fragments: {open_frags}")
print(f"Closing Fragments: {close_frags}")
