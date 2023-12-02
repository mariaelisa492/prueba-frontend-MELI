import './Breadcrumbs.scss'

interface breadCrumbsProp {
    categoriesByProduct: string | undefined;
}

const BreadCrumbs: React.FC<breadCrumbsProp> = ({ categoriesByProduct }) => {
    return (
        <h5 className='breadcrumbs-container'>{categoriesByProduct}</h5>
    )
}

export default BreadCrumbs