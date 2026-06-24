# 1. Mistake:
I used string concatenation instead of template literals.

Correction:
I replaced + with backticks and ${}.

# 2. Mistake:
I forgot that spread only creates a shallow clone.

Correction:
I learned nested objects still share references and handled nested updates separately.