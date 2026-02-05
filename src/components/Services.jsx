import Toggle from './Toggle'

export default function Services() {
    return (
        <section className="services">
            <h2>ESTUDIO JURÍDICO & ASOCIADOS</h2>

            <Toggle
                title="CONTRATOS"
                items={[
                'Alquileres y anticresis',
                'Divorcio y asistencia familiar',
                'Minutas de transferencia',
                'Testamentos y poderes'
                ]}
            />

            <Toggle
                title="PROCESOS FAMILIARES"
                items={[
                'Divorcio',
                'Asistencia familiar',
                'Impugnación de paternidad',
                'Unión libre'
                ]}
            />

            <Toggle
                title="PROCESOS CIVILES"
                items={[
                'Usucapión',
                'Herencias',
                'Desalojos',
                'Cumplimiento de contrato'
                ]}
            />
        </section>
    )
}