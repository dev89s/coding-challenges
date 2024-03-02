# The chief hopper is a bot that jumps on buildings and
# if the energy of the bot is greater than the height of the building
# newEnergy = energy + (energy - height)
# if the height is more than the bot energy
# newEnergy = energy - (height - energy)
# 
# Find the minimum energy for the bot for given arr of heights
# so that bot energy doesn't fall bellow zero at any point

heights = [3, 4, 3, 2, 4]
# heights = [4, 4]
av = int(min(heights) / 2)
for i in range(av, max(heights) + 1):
    fail = False
    energy = i
    for height in heights:
        energy = 2 * energy - height
        if energy < 0:
            fail = True
            break
    if fail:
        continue
    else:
        print(f"The minumum height is {i}")
        break
