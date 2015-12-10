# @param {Integer} a
# @param {Integer} b
# @param {Integer} c
# @param {Integer} d
# @param {Integer} e
# @param {Integer} f
# @param {Integer} g
# @param {Integer} h
# @return {Integer}
def compute_area(a, b, c, d, e, f, g, h)
  (c-a)*(d-b)+(g-e)*(h-f)-[0,[c,g].min-[a,e].max].max*[0,[d,h].min-[b,f].max].max
end
