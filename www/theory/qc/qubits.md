# Qubits

- [Nielsen Quantum Computing for the determined](https://www.youtube.com/watch?v=x6gOp_o7Bi8&list=PL1826E60FD05B44E4&index=4)

- Priciples of Quantum Mechanics. Dirac
- Mathematical Foundations of Quantum Mechanics, von Neuman


Matrices unitarias preservan longitud=> l²=a²+b²
Si l²=1 una U mantiene proabilidad 1
æ y ß son longitudes de un triangulo. Los vectores son ortonormales => "angulo 90º"
Las matrices unitarias son rotaciones en el espacio de fases

Structurally, unitary matrices are rotations and reflections. Perhaps it's more clear to first picture unitary diagonalization before the singular value decomposition. Suppose we unitarily diagonalize
A=UDU†
In unitary diagonalization, we first rotate (and possibly reflect) from our standard basis into our new orthonormal basis. This is the action of U†. Then we perform stretches by the magnitudes of the eigenvectors in the respective basis directions. This is the action of the diagonal matrix D. Finally we rotate back to our original basis, which is the action of U which reverses U†.

The action of a singular value decomposition is virtually identical, except that the "diagonal" matrix Σ does not necessarily map the same space to itself, so that the rotations happen in different vector spaces.

Unitary matrices are the complex analogues of orthogonal matrices, and both are very common in the theory of Lie groups and Lie algebras. Orthogonal matrices are the matrix representations of real linear maps that preserve distance. Unitary matrices are the complex versions, and they are the matrix representations of linear maps on complex vector spaces that preserve "complex distances".

If you have a complex vector space then instead of using the scaler product like you would in a real vector space, you use the Hermitian product. The Hermitian product of two complex vectors (thought of as n-by-1 matrices), say v and w, is defined to be ⟨v,w⟩=v¯¯¯⊤w.

Consider an n-by-n matrix, say M, with complex entries acting on Cn. The matrix preserves the Hermitian product if and only if ⟨Mv,Mw⟩=⟨v,w⟩:

⟨Mv,Mw⟩=⟨v,w⟩⟺(Mv)¯¯¯¯¯¯¯¯¯¯¯¯⊤(Mw)=v¯¯¯⊤w⟺v¯¯¯⊤(M¯¯¯¯¯⊤M)w=v¯¯¯⊤w.
Thus, M preserves the Hermitian product if and only if M¯¯¯¯¯⊤M is the n-by-n identity matrix, i.e. M is a unitary matrix.


Como es una matriz para preservar longitudes?
Operacion lineal que preserva una operacion ²
Porque laoperacion es lineal, pero los factores de la matriz tienen en cuenta cos² y sin² que preservan las longitudes
La lenealidad hace que funciones con cualquier combinacion lineal de vectores con los que funciona

Meditar estudiando: 5h profundas al día

- Difference between phase space and observables--> some kind of hidden variables.

-Valor esperado no deja de ser = suma valor estado*probabilidad
-Mirar spectral theory


- La T no afecta radiactividad: no será que la energía termica atomo << energia nuclear y no afecta. En cambio en el sol si que podrái afectar.

In short, we need a complex number to capture the kind of periodicity that makes wave mechanics wave mechanics.  In effect the complex numbers build waves into the theory.

