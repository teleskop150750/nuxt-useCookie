
const MAX_AGE = 60 * 60 * 24 * 365

type ID = string

export function useFavoriteStore() {
    const ids = useCookie<ID[] | undefined>('FAVORITES', {
        maxAge: MAX_AGE,
    })

    const countAll = computed(() => ids.value?.length || 0)

    function has(id: ID) {
        return (ids.value || []).includes(id) || false
    }

    function toggle(id: ID) {
        if (has(id)) {
            remove(id)
        } else {
            add(id)
        }
    }

    function add(id: ID) {
        ids.value = [...(ids.value || []), id]
    }

    function remove(id: ID) {
        if (!ids.value) return

        ids.value = ids.value.filter((i) => i !== id)
    }

    function set(newIds: ID[]) {
        ids.value = newIds
    }

    return {
        countAll,
        ids,
        has,
        add,
        remove,
        toggle,
        set,
    }
}
