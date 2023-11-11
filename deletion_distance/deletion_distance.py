def deletionDistance(str1: str, str2: str):

  if (str1 == "" and str2 == ""):
    return 0
  elif (str1 == ""):
    return len(str2)
  elif (str2 == ""):
    return len(str1)

  i = 0
  j = 0
  prevJ = 0
  shared = []
  while (i < len(str1)):
    # second pointer "j" limit check
    if (j == len(str2)):
      j = prevJ
      i += 1
      continue

    # shared char index
    if (str1[i] == str2[j]):
      shared.append(str1[i])
      prevJ = j
      i += 1
    j += 1

  return (len(str1) - len(shared)) + (len(str2) - len(shared))

str1 = 'some'
str2 = 'dog'

print(deletionDistance(str1, str2))

