/// <library version="0.0.1" src="https://github.com/thejustinwalsh/defold-xmath/archive/refs/heads/main.zip" />
/** @noSelfInFile **/

/**
 * Defold Math eXtention Library that avoids allocations
 * @license MIT
 * @author thejustinwalsh
 * @link https://github.com/thejustinwalsh/defold-xmath/
 */
declare namespace xmath {
	//
	// Arithmetic
	//

	/**
	 * Add one vector to another.
	 * @param vChangeInPlace vector output
	 * @param v1 first vector
	 * @param v2 second vector
	 */
	export function add(
		vChangeInPlace: vmath.vector3,
		v1: vmath.vector3,
		v2: vmath.vector3,
	): void;
	export function add(
		vChangeInPlace: vmath.vector4,
		v1: vmath.vector4,
		v2: vmath.vector4,
	): void;

	/**
	 * Subtract one vector from another.
	 * @param vChangeInPlace vector output
	 * @param v1 first vector
	 * @param v2 second vector
	 */
	export function sub(
		vChangeInPlace: vmath.vector3,
		v1: vmath.vector3,
		v2: vmath.vector3,
	): void;
	export function sub(
		vChangeInPlace: vmath.vector4,
		v1: vmath.vector4,
		v2: vmath.vector4,
	): void;

	/**
	 * Multiply a vector.
	 * @param vChangeInPlace vector output
	 * @param v vector
	 * @param n multiply by
	 */
	export function mul(
		vChangeInPlace: vmath.vector3,
		v: vmath.vector3,
		n: number,
	): void;
	export function mul(
		vChangeInPlace: vmath.vector4,
		v: vmath.vector4,
		n: number,
	): void;

	/**
	 * Divide a vector.
	 * @param vChangeInPlacevector output
	 * @param v vector
	 * @param n divide by
	 */
	export function div(
		vChangeInPlace: vmath.vector3,
		v: vmath.vector3,
		n: number,
	): void;
	export function div(
		vChangeInPlace: vmath.vector4,
		v: vmath.vector4,
		n: number,
	): void;

	//
	// Vector
	//

	/**
	 * Given two linearly independent vectors P and Q, the cross product,
	 * P &#x00D7; Q, is a vector that is perpendicular to both P and Q and
	 * therefore normal to the plane containing them.
	 * If the two vectors have the same direction (or have the exact
	 * opposite direction from one another, i.e. are not linearly independent)
	 * or if either one has zero length, then their cross product is zero.
	 * @param vChangeInPlace vector output
	 * @param v1  first vector
	 * @param v2  second vector
	 */
	export function cross(
		vChangeInPlace: vmath.vector3,
		v1: vmath.vector3,
		v2: vmath.vector3,
	): void;

	/**
	 * Performs an element wise multiplication between two vectors of the same type
	 * The resulting value is a vector defined as (e.g. for a vector3):
	 * `xmath.mul_per_elem(v, a, b) = vmath.vector3(a.x * b.x, a.y * b.y, a.z * b.z)`
	 * @param vChangeInPlace vector output
	 * @param v1  first vector
	 * @param v2  second vector
	 */
	export function mul_per_elem(
		vChangeInPlace: vmath.vector3,
		v1: vmath.vector3,
		v2: vmath.vector3,
	): void;
	export function mul_per_elem(
		vChangeInPlace: vmath.vector4,
		v1: vmath.vector4,
		v2: vmath.vector4,
	): void;

	/**
	 * Normalizes a vector, i.e. outputs a vector with the same
	 * direction as the input vector, but with length 1.
	 * ⚠ The length of the vector must be above 0, otherwise a
	 * division-by-zero will occur.
	 * @param vChangeInPlace vector output
	 * @param v1 vector to normalize
	 */
	export function normalize(
		vChangeInPlace: vmath.vector3,
		v1: vmath.vector3,
	): void;
	export function normalize(
		vChangeInPlace: vmath.vector4,
		v1: vmath.vector4,
	): void;

	/**
	 * Outputs a vector from the supplied vector that is
	 * rotated by the rotation described by the supplied
	 * quaternion.
	 * @param vChangeInPlace vector output
	 * @param q  quaternion
	 * @param v1 vector to rotate
	 */
	export function rotate(
		vChangeInPlace: vmath.vector3,
		q: vmath.quaternion,
		v1: vmath.vector3,
	): void;

	/**
	 * Changes vector to (0, 0, 0) or (0, 0, 0, 1).
	 * @param vChangeInPlace vector output
	 */
	export function vector(vChangeInPlace: vmath.vector3): void;
	export function vector(vChangeInPlace: vmath.vector4): void;

	//
	// Quat
	//

	/**
	 * Calculates the conjugate of a quaternion. The result is a
	 * quaternion with the same magnitudes but with the sign of
	 * the imaginary (vector) parts changed:
	 * `q* = [w, -v]`
	 * @param qChangeInPlace  quaternion output
	 * @param q1  quaternion of which to calculate the conjugate
	 */
	export function conj(
		qChangeInPlace: vmath.quaternion,
		q1: vmath.quaternion,
	): void;

	/**
	 * The resulting quaternion describes a rotation of `angle`
	 * radians around the axis described by the unit vector `v`.
	 * @param qChangeInPlace  quaternion output
	 * @param v  axis
	 * @param angle  angle
	 */
	export function quat_axis_angle(
		qChangeInPlace: vmath.quaternion,
		v: vmath.vector3,
		angle: number,
	): void;

	/**
	 * The resulting quaternion describes the rotation from the
	 * identity quaternion (no rotation) to the coordinate system
	 * as described by the given x, y and z base unit vectors.
	 * @param qChangeInPlace  quaternion output
	 * @param x  x base vector
	 * @param y  y base vector
	 * @param z  z base vector
	 */
	export function quat_basis(
		qChangeInPlace: vmath.quaternion,
		x: vmath.vector3,
		y: vmath.vector3,
		z: vmath.vector3,
	): void;

	/**
	 * The resulting quaternion describes the rotation that,
	 * if applied to the first vector, would rotate the first
	 * vector to the second. The two vectors must be unit
	 * vectors (of length 1).
	 * ⚠ The result is undefined if the two vectors point in opposite directions
	 * @param qChangeInPlace  quaternion output
	 * @param v1  first unit vector, before rotation
	 * @param v2  second unit vector, after rotation
	 */
	export function quat_from_to(
		qChangeInPlace: vmath.quaternion,
		v1: vmath.vector3,
		v2: vmath.vector3,
	): void;

	/**
	 * The resulting quaternion describes a rotation of `angle`
	 * radians around the x-axis.
	 * @param qChangeInPlace  quaternion output
	 * @param angle  angle in radians around x-axis
	 */
	export function quat_rotation_x(
		qChangeInPlace: vmath.quaternion,
		angle: number,
	): void;

	/**
	 * The resulting quaternion describes a rotation of `angle`
	 * radians around the y-axis.
	 * @param qChangeInPlace  quaternion output
	 * @param angle  angle in radians around y-axis
	 */
	export function quat_rotation_y(
		qChangeInPlace: vmath.quaternion,
		angle: number,
	): void;

	/**
	 * The resulting quaternion describes a rotation of `angle`
	 * radians around the z-axis.
	 * @param qChangeInPlace  quaternion output
	 * @param angle  angle in radians around z-axis
	 */
	export function quat_rotation_z(
		qChangeInPlace: vmath.quaternion,
		angle: number,
	): void;

	/**
	 * Sets the identity quaternion equal to:
	 * `vmath.quat(0, 0, 0, 1)`
	 * @param qChangeInPlace  quaternion output
	 */
	export function quat(qChangeInPlace: vmath.quaternion): void;

	//
	// Vector + Quat
	//

	/**
	 * Linearly interpolate between two vectors. The function
	 * treats the vectors as positions and interpolates between
	 * the positions in a straight line. Lerp is useful to describe
	 * transitions from one place to another over time.
	 * ⚠ The function does not clamp t between 0 and 1.
	 * @param vChangeInPlace vector output
	 * @param t  interpolation parameter, 0-1
	 * @param v1 vector to lerp from
	 * @param v2 vector to lerp to
	 */
	export function lerp(
		vChangeInPlace: vmath.vector3,
		t: number,
		v1: vmath.vector3,
		v2: vmath.vector3,
	): void;
	export function lerp(
		vChangeInPlace: vmath.vector4,
		t: number,
		v1: vmath.vector4,
		v2: vmath.vector4,
	): void;

	/**
	 * Linearly interpolate between two quaternions. Linear
	 * interpolation of rotations are only useful for small
	 * rotations. For interpolations of arbitrary rotations,
	 * vmath.slerp yields much better results.
	 * ⚠ The function does not clamp t between 0 and 1.
	 * @param qChangeInPlace  quaternion output
	 * @param t  interpolation parameter, 0-1
	 * @param q1  quaternion to lerp from
	 * @param q2  quaternion to lerp to
	 */
	export function lerp(
		qChangeInPlace: vmath.quaternion,
		t: number,
		q1: vmath.quaternion,
		q2: vmath.quaternion,
	): void;

	/**
	 * Linearly interpolate between two values. Lerp is useful
	 * to describe transitions from one value to another over time.
	 * ⚠ The function does not clamp t between 0 and 1.
	 * @param nChangeInPlace  number output
	 * @param t  interpolation parameter, 0-1
	 * @param n1  number to lerp from
	 * @param n2  number to lerp to
	 */
	export function lerp(
		nChangeInPlace: number,
		t: number,
		n1: number,
		n2: number,
	): void;

	/**
	 * Spherically interpolates between two vectors. The difference to
	 * lerp is that slerp treats the vectors as directions instead of
	 * positions in space.
	 * The direction of the resulting vector is interpolated by the angle
	 * and the magnitude is interpolated between the magnitudes of the
	 * from and to vectors.
	 * ⚠ Slerp is computationally more expensive than lerp.
	 * The function does not clamp t between 0 and 1.
	 * @param vChangeInPlace vector output
	 * @param t  interpolation parameter, 0-1
	 * @param v1 vector to slerp from
	 * @param v2 vector to slerp to
	 */
	export function slerp(
		vChangeInPlace: vmath.vector3,
		t: number,
		v1: vmath.vector3,
		v2: vmath.vector3,
	): void;
	export function slerp(
		vChangeInPlace: vmath.vector4,
		t: number,
		v1: vmath.vector4,
		v2: vmath.vector4,
	): void;

	/**
	 * Slerp travels the torque-minimal path maintaining constant
	 * velocity, which means it travels along the straightest path along
	 * the rounded surface of a sphere. Slerp is useful for interpolation
	 * of rotations.
	 * Slerp travels the torque-minimal path, which means it travels
	 * along the straightest path the rounded surface of a sphere.
	 * ⚠ The function does not clamp t between 0 and 1.
	 * @param qChangeInPlace vector output
	 * @param t  interpolation parameter, 0-1
	 * @param q1  quaternion to slerp from
	 * @param q2  quaternion to slerp to
	 */
	export function slerp(
		qChangeInPlace: vmath.quaternion,
		t: number,
		q1: vmath.quaternion,
		q2: vmath.quaternion,
	): void;

	//
	// Matrix
	//

	/**
	 * The resulting identity matrix describes a transform with
	 * no translation or rotation.
	 * @param mChangeInPlace  matrix4 output
	 */
	export function matrix(mChangeInPlace: vmath.matrix4): void;

	/**
	 * Outputs matrix with all components set to the
	 * corresponding values from the supplied matrix. I.e.
	 * the function creates a copy of the given matrix.
	 * @param mChangeInPlace  matrix4 output
	 * @param m1  existing matrix
	 */
	export function matrix(
		mChangeInPlace: vmath.matrix4,
		m1: vmath.matrix4,
	): void;

	/**
	 * The resulting matrix describes a rotation around the axis by the specified angle.
	 * @param mChangeInPlace  matrix4 output
	 * @param v  axis
	 * @param angle  angle in radians
	 */
	export function matrix_axis_angle(
		mChangeInPlace: vmath.matrix4,
		v: vmath.vector3,
		angle: number,
	): void;

	/**
	 * The resulting matrix describes the same rotation as the quaternion,
	 * but does not have any translation (also like the quaternion).
	 * @param mChangeInPlace  matrix4 output
	 * @param q  quaternion to create matrix from
	 */
	export function matrix_from_quat(
		mChangeInPlace: vmath.matrix4,
		q: vmath.quaternion,
	): void;

	/**
	 * Constructs a frustum matrix from the given values. The left, right,
	 * top and bottom coordinates of the view cone are expressed as distances
	 * from the center of the near clipping plane. The near and far coordinates
	 * are expressed as distances from the tip of the view frustum cone.
	 * @param mChangeInPlace  matrix4 output
	 * @param left  coordinate for left clipping plane
	 * @param right  coordinate for right clipping plane
	 * @param bottom  coordinate for bottom clipping plane
	 * @param top  coordinate for top clipping plane
	 * @param near  coordinate for near clipping plane
	 * @param far  coordinate for far clipping plane
	 */
	export function matrix_frustum(
		mChangeInPlace: vmath.matrix4,
		left: number,
		right: number,
		bottom: number,
		top: number,
		near: number,
		far: number,
	): void;

	/**
	 * The resulting matrix is the inverse of the supplied matrix.
	 * ⚠ For ortho-normal matrices, e.g. regular object transformation,
	 * use `xmath.matrix_ortho_inv()` instead.
	 * The specialized inverse for ortho-normalized matrices is much faster
	 * than the general inverse.
	 * @param mChangeInPlace  matrix4 output
	 * @param m1  matrix to invert
	 */
	export function matrix_inv(
		mChangeInPlace: vmath.matrix4,
		m1: vmath.matrix4,
	): void;

	/**
	 * The resulting matrix is created from the supplied look-at parameters.
	 * This is useful for constructing a view matrix for a camera or
	 * rendering in general.
	 * @param mChangeInPlace  matrix4 output
	 * @param eye  eye position
	 * @param look_at  look-at position
	 * @param up  up vector
	 */
	export function matrix_look_at(
		mChangeInPlace: vmath.matrix4,
		eye: vmath.vector3,
		look_at: vmath.vector3,
		up: vmath.vector3,
	): void;

	/**
	 * Creates an orthographic projection matrix.
	 * This is useful to construct a projection matrix for a camera or rendering in general.
	 * @param mChangeInPlace  matrix4 output
	 * @param left  coordinate for left clipping plane
	 * @param right  coordinate for right clipping plane
	 * @param bottom  coordinate for bottom clipping plane
	 * @param top  coordinate for top clipping plane
	 * @param near  coordinate for near clipping plane
	 * @param far  coordinate for far clipping plane
	 */
	export function matrix4_orthographic(
		mChangeInPlace: vmath.matrix4,
		left: number,
		right: number,
		bottom: number,
		top: number,
		near: number,
		far: number,
	): void;

	/**
	 * The resulting matrix is the inverse of the supplied matrix.
	 * The supplied matrix has to be an ortho-normal matrix, e.g.
	 * describe a regular object transformation.
	 * ⚠ For matrices that are not ortho-normal
	 * use the general inverse `xmath.matrix_inv()` instead.
	 * @param mChangeInPlace  matrix4 output
	 * @param m1  ortho-normalized matrix to invert
	 */
	export function matrix_ortho_inv(
		mChangeInPlace: vmath.matrix4,
		m1: vmath.matrix4,
	): void;

	/**
	 * Creates a perspective projection matrix.
	 * This is useful to construct a projection matrix for a camera or rendering in general.
	 * @param mChangeInPlace  matrix4 output
	 * @param fov  angle of the full vertical field of view in radians
	 * @param aspect  aspect ratio
	 * @param near  coordinate for near clipping plane
	 * @param far  coordinate for far clipping plane
	 */
	export function matrix4_perspective(
		mChangeInPlace: vmath.matrix4,
		fov: number,
		aspect: number,
		near: number,
		far: number,
	): void;

	/**
	 * The resulting matrix describes a rotation around the x-axis
	 * by the specified angle.
	 * @param mChangeInPlace  matrix4 output
	 * @param angle  angle in radians around x-axis
	 */
	export function matrix_rotation_x(
		mChangeInPlace: vmath.matrix4,
		angle: number,
	): void;

	/**
	 * The resulting matrix describes a rotation around the y-axis
	 * by the specified angle.
	 * @param mChangeInPlace  matrix4 output
	 * @param angle  angle in radians around y-axis
	 */
	export function matrix_rotation_y(
		mChangeInPlace: vmath.matrix4,
		angle: number,
	): void;

	/**
	 * The resulting matrix describes a rotation around the z-axis
	 * by the specified angle.
	 * @param mChangeInPlace  matrix4 output
	 * @param angle  angle in radians around z-axis
	 */
	export function matrix_rotation_z(
		mChangeInPlace: vmath.matrix4,
		angle: number,
	): void;

	/**
	 * The resulting matrix describes a translation of a point
	 * in euclidean space.
	 * @param mChangeInPlace  matrix4 output
	 * @param position  position vector to create matrix from
	 */
	export function matrix_translation(
		mChangeInPlace: vmath.matrix4,
		position: vmath.vector3 | vmath.vector4,
	): void;
}
