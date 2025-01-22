import { createConnection } from '$lib/db/mysql';
import { redirect } from '@sveltejs/kit';

if(!locals.user || locals.user.role !== 'admin'){
	redirect(302,'/login');
}


export const actions = {
	createLocation: async ({ request }) => {
		const formData = await request.formData();
		const connection = await createConnection();
		const [result] = await connection.execute(
			'INSERT INTO locations (name,description) VALUES(?,?)',
			[formData.get('name'), formData.get('description')]
		);
		if (result.affectedRows) {
			redirect(303, '/admin/locations');
		}
	}
};
